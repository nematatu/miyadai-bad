import WeeklySchedule from '@/components/activities/WeeklySchedule'
import YearlySchedule from '@/components/activities/YearlySchedule'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, CalendarRange } from "lucide-react"

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">部活動スケジュール</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
          <CardHeader className="bg-gray-800 text-white">
            <CardTitle className="flex items-center text-2xl">
              <CalendarDays className="mr-2 text-sky-300" />
              週間活動内容
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 bg-white">
            <WeeklySchedule />
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
          <CardHeader className="bg-gray-800 text-white">
            <CardTitle className="flex items-center text-2xl">
              <CalendarRange className="mr-2 text-sky-300" />
              年間活動予定
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 bg-white">
            <YearlySchedule />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}