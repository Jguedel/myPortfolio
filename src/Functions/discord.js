import React from "react";
import axios from "axios";

class discordFunctions {
  send = async (content, title) => {
    const body = {
      content: "Portfolio Contact Request",
      tts: false,
      color: "green",
      embeds: [
        {
          title: title,
          description: content,
        },
      ],
    };
    try {
      console.log("sending....");
      const response = await axios.post(
        "https://discord.com/api/webhooks/1208458719374090290/G70EmRCctKgA562WMgbOdy8vAY9bUD418rpG03gAo7tqJoWoM5BhhcJ-80Pq0XadmOW0",
        body
      );
      console.log("sending succseful");
    } catch (error) {
      console.debug("error posting");
      console.log(error);
    }
  };
}

export default discordFunctions;
