import Conversation from "../models/conversation.model.js"

export const createConversation = async (req, res) => {
    try {
        const userId = req.headers["x-user-id"]
        console.log("userId", userId)

        const coversation = await Conversation.create({
            userId:userId
        })

        return res.status(200).json(conversation)
    } catch (e) {
        console.error("Error creating conversation:", e)
        return res.status(500).json({ error: "Failed to create conversation" })
    }
}