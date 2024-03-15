// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





// function TwoLineGraph({data}){

// 	return(
// 		<div className={styles.TwoLineGraph}>
// 			<h3>{data.subject}</h3>
// 			<ResponsiveContainer width="100%" aspect={1.5}>
// 				<LineChart
// 					width={500}
// 					height={300}
// 					data={data.stats}
// 					margin={{
// 						top: 0,
// 						right: 10,
// 						left: 0,
// 						bottom: 5,
// 					}}
// 				>
// 					<CartesianGrid 
// 						vertical={false}
// 						strokeWidth="0.1"
// 						stroke="#3D3D3D"
// 					/>
// 					<XAxis 
// 						dataKey="name"
// 						scale="point"
// 						axisLine={false} 
// 						tickLine={false}
// 						minTickGap={0}
// 						dy={10}
// 						margin={20}
// 						padding={{ left: 30, right: 30 }}
// 						style={{
// 							color: "#3D3D3D",
// 							fill: "#3D3D3D",
// 							fontSize: "14px"
// 						}}
// 					/>
// 					<YAxis 
// 						axisLine={false} 
// 						tickLine={false}
// 						tickMargin={10}
// 						tickCount={11}
// 						interval={0}
// 						domain={[0,100]} 
// 						style={{
// 							color: "#595959",
// 							fill: "#595959",
// 							fontSize: "14px"
// 						}}
// 					/>
// 					<Tooltip />
// 					<Legend 
// 						verticalAlign="top" 
// 						align="right" 
// 						layout="horizontal"
// 						iconType="rect"
// 						wrapperStyle={{
// 							top: -36,
// 							fontSize: "12px"
// 						}}
// 					/>
// 					<Line 
// 						type="monotone" 
// 						name="Marks Obtained" 
// 						dataKey="marksObtained" 
// 						stroke="#6D47EF" 
// 						activeDot={{ r: 3 }} 
// 						strokeWidth={2} 
// 					/>
// 					<Line 
// 						type="monotone" 
// 						name="Average Marks" 
// 						dataKey="averageMarks" 
// 						stroke="#57DDA4" 
// 						strokeWidth={2} 
// 					/>
// 				</LineChart>
// 			</ResponsiveContainer>
// 		</div>
// 	)
// }

// export default TwoLineGraph;
