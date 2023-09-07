import Navbar from '@/components/Navbar'
import QuestionStatus from '@/components/QuestionStatus'
import CountdownTimer from '@/components/CountdownTimer'
import DashboardBody from '@/modules/Dashboard/Body'

const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar type="dashboard" />
        <div className="flex justify-between container mx-auto mt-14 gap-[126px]">
          <DashboardBody />
          <aside className="w-[365px] flex flex-col gap-6 basis-[365px] grow-0 shrink-0">
            <CountdownTimer initialMinutes={45} />
            <QuestionStatus />
          </aside>
        </div>
      </div>
    </>
  )
}

export default Dashboard
