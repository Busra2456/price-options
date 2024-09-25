
import { LineChart as LChart, Line , XAxis, YAxis,} from 'recharts';
const LineChart = () => {
      const mathMarksData = [
              { id: 1, name: "Alice",physics:59, chemistry:66 ,math: 76 },
              { id: 2, name: "Bob",physics:32, chemistry:66 , math: 83 },
              { id: 3, name: "Charlie",physics:82, chemistry:66 , math: 91 },
              { id: 4, name: "David",physics:89, chemistry:66 , math: 79 },
              { id: 5, name: "Emma",physics:82, chemistry:66 , math: 87 },
              { id: 6, name: "Frank",physics:52, chemistry:66 , math: 93 },
              { id: 7, name: "Grace",physics:72, chemistry:66 , math: 82 },
              { id: 8, name: "Hannah",physics:92, chemistry:66 , math: 78 },
              { id: 9, name: "Ian",physics:52, chemistry:66 , math: 89 },
              { id: 10, name: "Jack",physics:88, chemistry:66 , math: 95 }
            ]
          
          
      return (
            <div>
                <LChart width={800} height={400} data={mathMarksData} >

                  <XAxis dataKey="name" />
                  <YAxis></YAxis>
                   <Line dataKey="math" stroke='red' ></Line>
                   <Line dataKey="physics" stroke='yellow' ></Line>
                  </LChart>   
            </div>
      );
};

export default LineChart;