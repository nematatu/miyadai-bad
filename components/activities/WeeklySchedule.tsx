import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const weeklySchedule = [
    { day: '月曜日', activity: '練習', time: '19:00 - 21:00' },
    { day: '火曜日', activity: '自主練', time: '17:00 - 19:00' },
    { day: '水曜日', activity: '練習', time: '19:00 - 21:00' },
    { day: '木曜日', activity: '練習', time: '17:00 - 19:00' },
    { day: '金曜日', activity: '練習', time: '19:00 - 21:00' },
    { day: '土曜日', activity: '自主練', time: '13:30 - 16:45' },
    { day: '日曜日', activity: '自主練', time: '13:30 - 16:45' },
  ]

export default function WeeklySchedule() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-gray-800">曜日</TableHead>
            <TableHead className="text-gray-800">活動内容</TableHead>
            <TableHead className="text-gray-800">活動時間</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weeklySchedule.map((item, index) => (
            <TableRow key={item.day} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <TableCell className="font-medium text-gray-700">{item.day}</TableCell>
              <TableCell className="text-gray-600">{item.activity}</TableCell>
              <TableCell className="text-gray-600">{item.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}