import Card from "./Card"

const Notes = (props) => {
  return (
    <div className="lg:border-l-3 border-t-2 lg:border-t-0 p-10 flex justify-items-start lg:w-6/12 h-full w-full gap-10 flex-wrap">
      {props.Arr.map((e,i)=>{
        console.log(e);
        return <Card key={i} SetArr={props.SetArr} Arr={props.Arr} Titel={e.Titel} Note={e.Note}/>
      })}
    </div>
  )
}

export default Notes