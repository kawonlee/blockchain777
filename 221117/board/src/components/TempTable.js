import TempTr from "./TempTr";

// export default function TempTable({ tableData, head, tempArr }) {
//   return (
//     <table>
//       <thead>
//         <TempTr isHead={true} tableData={tableData} head={head} />
//       </thead>
//       <tbody>
//         {tempArr.map((item, index) => (
//           <TempTr key={index} tableData={item} head={head} />
//         ))}
//       </tbody>
//     </table>
//   );
// }

export default function TempTable(props) {
  return (
    <table>
      <thead>
        <TempTr isHead={true} tableData={props.tableData} head={props.head} />
      </thead>
      <tbody>
        {props.tempArr.map((item, index) => (
          <TempTr key={index} tableData={item} head={props.head} />
        ))}
      </tbody>
    </table>
  );
}
