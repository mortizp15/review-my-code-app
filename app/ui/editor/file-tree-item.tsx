
import { Repo } from "@/app/lib/types";
import React, { useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";


export const FileTreeItem = ({ item, handleFileSelect }: { item: Repo, handleFileSelect?: (file: any) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  if(item.type === "tree") {
  return (
    <>
      {item.type === "tree" && (
        <div>
          <span
            className="flex truncate gap-3 my-2 cursor-pointer text-zinc-300 font-semibold"
          >
            {!isOpen ? (
              <div className="hover:bg-[#333] cursor-pointer flex items-center gap-1" onClick={toggle}>
                <IoIosArrowForward /> <FaRegFolder /> {item.path}
              </div>
            ) : (
              <div>
                <div className="hover:bg-[#333] cursor-pointer flex items-center gap-1" onClick={toggle}>
                  <IoIosArrowDown /> <FaRegFolder /> {item.path}
                </div>
                <div className="">
                  {item.children?.map((child) => (
                      <FileTreeItem key={child.sha} item={child} handleFileSelect={handleFileSelect}/>
                  ))}
                </div>
              </div>
            )}
          </span>
        </div>
      )}
    </>
  );
  } else if (item.type === "blob") {
    return (
      <div className="px-4 ml-4 flex p-2 items-center font-medium text-sm text-[#c7c7c7]" onClick={() => handleFileSelect && handleFileSelect(item)}>
        <div className="flex items-center"><FaRegFile style={{ fontWeight: 600, width: 16, height: 16, marginRight: 5 }} /> {item.path}</div>
      </div>
    );
  }
};
