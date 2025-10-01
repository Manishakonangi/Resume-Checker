// =======================
// Resume Ranker Backend
// =======================

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const connectDB = require("./db"); // import MongoDB connection


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Routes



// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowedTypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only PDF or DOCX files are allowed"));
  },
});

// Test route
app.get("/", (req, res) => {
  res.send("✅ Resume Ranker Server is Running with OpenRouter AI!");
});

// Function to extract text from PDF or DOCX
const extractTextFromFile = async (filePath, mimetype) => {
  if (mimetype === "application/pdf") {
    const buffer = fs.readFileSync(filePath);
    const data = await pdfParse(buffer);
    return data.text;
  } else if (
    mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const buffer = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } else {
    throw new Error("Unsupported file type");
  }
};

// Resume upload & analysis route
app.post("/api/resume/upload", upload.single("resume"), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: "No file uploaded" });

  try {
    // Extract resume text
    const resumeText = await extractTextFromFile(file.path, file.mimetype);

    // Create prompt for AI
    const prompt = `Analyze the following resume text and provide a score out of 100, list of improvements, and missing keywords:\n\n${resumeText}`;

    console.log("📤 Prompt to AI:", prompt.slice(0, 500));

    // Call OpenRouter AI
    const aiResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiText = aiResponse.data.choices[0].message.content;

    // Send structured response
    res.json({
      success: true,
      result: aiText,
    });
  } catch (error) {
    console.error("❌ AI API Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to analyze resume using AI" });
  } finally {
    // Cleanup uploaded file
    fs.unlink(file.path, (err) => {
      if (err) console.error("Failed to delete file:", err);
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
