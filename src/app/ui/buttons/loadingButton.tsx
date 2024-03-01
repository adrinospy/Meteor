import React from "react"

export default function LoadingButton(onSubmit:(e: React.FormEvent) => void){
    return (
        <button
        className="w-[150px] text-white bg-[#5d515d] hover:bg-[#3f3f3c] focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
      type="submit"
      onSubmit={onSubmit}>Login</button>
    )
}