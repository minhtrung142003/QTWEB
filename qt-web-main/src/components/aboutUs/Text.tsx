import React from 'react'

const Text: React.FC = () => {
  const numbers = ["01", "02", "03", "04", "05"];

  return (
    <div>
        {numbers.map((number, index) => (
    <p className="font-normal text-[86px] text-[#70462D]"></p>

        ))}

    </div>

  )
}

export default Text