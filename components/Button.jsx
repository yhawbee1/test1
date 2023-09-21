"use client"
import React from 'react'

export default function Button({title}) {
  return (
    <button onClick={() => alert({title})} className="border px-8 py-2 text-slate-100 rounded-lg hover: hover:bg-zinc-200 hover:text-red-600">
        {title}
    </button>
  )
}
