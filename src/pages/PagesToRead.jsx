import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const data = [
        {
          name: 'The Great Gatsby',
          uv: 180,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '1984 Book',
          uv: 328,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'To Kill a Mockingbird',
          uv: 336,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'The Catcher in the Rye',
          uv: 224,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'The Hitchhikers the Galaxy',
          uv: 200,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'ride and Prejudice',
          uv: 432,
          pv: 3800,
          amt: 2500,
        },
      ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PagesToRead;
