
import React , {useState , useEffect} from 'react'

const ServiceWidget = ({value , state , changeState }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const absoluteElement = document.getElementById(value.title); 
      if(absoluteElement){
        setHeight(absoluteElement.offsetHeight);
      }
    }, 0);
  }, [state]);

  return (
    <section id={`${value.title}-section`}  style={{ marginBottom: `${height}px` }} >
      <article className="service-widget" onClick={ () => changeState(value.title)} >
        <div className="service-icons-container">
          {
            value.icons.map((e) =>{
              return <div className='service-icon'>{e}</div> ;
            })
          }
        </div>
        <h3 className={state === value.title ? "dev-title selected-dev" : "dev-title" }>{value.title}</h3>
        <div className={state === value.title ? "rectangle" : "hide-data"}></div>
      </article>
      <article 
      id={value.title}
          className={ `service-data ${state === value.title ? "service-data-enter" : "service-data-exit" }` } >
          <h5>{value.info}</h5>
        <div className="software-alignment">
          <div className="softwares">
          {
              value.softwares.map((e) => {
              return e
          })
       }
         </div>
        <a className='close-data' href={`#${value.title}}-section`}
         onClick={() => changeState("") }
        >
          close
        </a>
        </div>
      </article>
    </section>
  )
}

export default ServiceWidget
