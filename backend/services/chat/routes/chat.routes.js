import express from "express"
import { createConversation, getConversation, getMessages, saveMessage, updateConversation } from "../controllers/chat.controller.js"

const router = express.Router()

router.get("/create-conversation", createConversation)
router.get("/get-conversations", getConversation)
router.post("/update-conversations/:id", updateConversation)
router.post("/messages", saveMessage)
router.get("/get-message/:conversationId", getMessages)

export default router