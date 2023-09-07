'use client'

import { Table } from 'flowbite-react'
import QuestionEditable from '@/components/typograhpy/QuestionEditable'

const FillInTheBlankTable = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="border border-l-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">Designed</p>
          </td>
          <td className="border border-r-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
              in the <span>21. </span>
              <QuestionEditable />
            </p>
          </td>
        </tr>
        <tr>
          <td className="border border-l-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">Overall layout</p>
          </td>
          <td className="border border-r-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
              Cells arranged in <span>22. </span>
              <QuestionEditable />
            </p>
          </td>
        </tr>
        <tr>
          <td className="border border-l-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">Individual cell design</p>
          </td>
          <td className="border border-r-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
              Cells looked like <span>23. </span>
              <QuestionEditable />
              <span>(street) Callin</span>
            </p>
          </td>
        </tr>
        <tr>
          <td className="border border-l-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">Effect:</p>
          </td>
          <td className="border border-r-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
              Prisoners would <span>24. </span>
              <QuestionEditable />
            </p>
          </td>
        </tr>
        <tr>
          <td className="border border-l-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">Purpose</p>
          </td>
          <td className="border border-r-0 p-2 border-[#333333]">
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
              to reduce <span>25. </span>
              <QuestionEditable />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default FillInTheBlankTable
