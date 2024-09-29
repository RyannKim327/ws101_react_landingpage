import { useEffect } from "react";
import { useState } from "react";

export default function Title(new_title) {
  // const [title, setTitle] = useState("")

  useEffect(() => {
    const title = document.getElementById("title");
    if (title) {
      title.textContent = new_title;
    }
  }, new_title);
}
