import React from "react";

export default function Footer() {
  const contactDetails = [
    { title: "Phone", content: "+44 07798850881", type: "phone" },
    { title: "Email", content: "kiranmavi5502@gmail.com", type: "email" },
    { title: "Github", content: "https://github.com/Kiranmavi", type: "link" },
    { title: "Let's Collaborate", content: "https://linkedin.com/in/kiran-mavi-188196215", type: "link" },
    { title: "", content: "©2025 Kiran. Crafted with originality and purpose.", type: "text" },
  ];

  const renderContent = (item) => {
    switch (item.type) {
      case "phone":
        return <a href={`tel:${item.content}`} className="text-blue-600 hover:underline font-bold">{item.content}</a>;
      case "email":
        return <a href={`mailto:${item.content}`} className="text-blue-600 hover:underline font-bold">{item.content}</a>;
      case "link":
        return <a href={item.content} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">{item.content}</a>;
      case "text":
        return <div className="font-medium text-center w-full mt-2">{item.content}</div>;
      default:
        return <span>{item.content}</span>;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2 py-6">
      <div className="font-semibold text-2xl mb-4">Let&apos;s Keep the Story Going</div>
      <div className="flex flex-col gap-2 w-full max-w-[700px] px-4">
        {contactDetails.map((item, index) => (
          item.type === "text" ? (
            <div key={index}>{renderContent(item)}</div>
          ) : (
            <div key={index} className="flex justify-between items-center w-full">
              <div className="w-[40%] text-end pr-4 font-medium">{item.title}:</div>
              <div className="w-[60%] text-start">{renderContent(item)}</div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
