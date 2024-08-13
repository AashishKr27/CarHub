"use client";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className=" relative w-6 h-6">
          <Image src={rightIcon} alt="arrow" fill className=" object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButtom;
