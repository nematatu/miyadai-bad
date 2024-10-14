import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const yearlySchedule = [
    { month: '4月', activities: ['新入生歓迎会'] },
    { month: '5月', activities: ['九州学生リーグ'] },
    { month: '6月', activities: ['九州学生選手権'] },
    { month: '7月', activities: [] },
    { month: '8月', activities: [] },
    { month: '9月', activities: ['西日本学生選手権'] },
    { month: '10月', activities: []},
    { month: '11月', activities: ['九州中国四国学生選手権 (三地区)'] },
    { month: '12月', activities: ['宮崎県総合シングルス','忘年会'] },
    { month: '1月', activities: [] },
    { month: '2月', activities: ['南九州学生選手権'] },
    { month: '3月', activities: ['追いコン'] },
]

export default function YearlySchedule() {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="text-gray-800">月</TableHead>
                        <TableHead className="text-gray-800">活動予定</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {yearlySchedule.map((item, index) => (
                        <TableRow key={item.month} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <TableCell className="font-medium text-gray-700">{item.month}</TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    {item.activities.map((activity, i) => (
                                        <Badge key={i} variant="outline" className="bg-sky-100 text-sky-800 hover:bg-sky-200 transition-colors duration-200">
                                            {activity}
                                        </Badge>
                                    ))}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}