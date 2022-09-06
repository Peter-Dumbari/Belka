import "../../App.css"

export default function DashBoardCards() {

  const Cards = [
    {id: 0, cardTitle: "190+", firstHeading: "Senior", secondHeading: "Wellness"},
    {id: 1, cardTitle: "200+", firstHeading: "Junior", secondHeading: "Training"},
    {id: 2, cardTitle: "390+", firstHeading: "Elderly", secondHeading: "Support"},
    {id: 3, cardTitle: "490+", firstHeading: "Expensive", secondHeading: "Business"},
    {id: 4, cardTitle: "490+", firstHeading: "Expensive", secondHeading: "Business"},
    {id: 5, cardTitle: "400+", firstHeading: "Production", secondHeading: "Revenue"},
  ]
  return (
    <div className="row row-cols-2  row-cols-sm-3 row-cols-md-6 row-col-lg-6 g-3" style={{marginTop:"-3%"}}>
              { Cards.map((carditems)=>
                  <div className="col" key={carditems.id}>
                  <div className="card">
                    <div className="card-body">
                    <h3 className="card-title">{carditems.cardTitle}</h3>
                      <span className="card-text">
                        <span>{carditems.firstHeading}</span><br />
                       <span>{carditems.secondHeading}</span>
                      </span> 
                    </div>
                  </div>
                </div>
              )}
            </div>
  )
}
