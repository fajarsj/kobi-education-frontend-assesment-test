import ReminderIcon from '@/components/icons/reminder.svg'
import FolderIcon from '@/components/icons/folder.svg'

const Drawer = () => {
  return (
    <div className="min-w-[300px] border-r-[10px] border-[#F3F3F3] min-h-screen">
      <h4 className="text-[#505050] font-semibold mb-4 ml-8 pt-10">Pages</h4>
      <ul>
        <li className="flex gap-4 bg-[#F0F7FF] py-3 px-8">
          <ReminderIcon />
          <span className="text-[#064C85] font-semibold">New Items</span>
        </li>
        <li className="flex gap-4  py-3 px-8">
          <FolderIcon />

          <span className="text-[#505050] ">Database</span>
        </li>
        <li className="flex gap-4 py-3 px-8">
          <span className="text-[#505050] ml-10">Lorem Ipsum</span>
        </li>
      </ul>
    </div>
  )
}

export default Drawer
