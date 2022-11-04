import './app-filter.css';


const AppFilter = (props) => {

    const buttonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "rise", label: "На повышение"},
        {name: "moreThen100", label: "З/П больше 1000$"},
    ]


    const buttons = buttonsData.map(({name, label}) => {

        return (
            <button className="btn btn-light"
                    type="button"
                    key={name}
                    onClick={() => {props.onFilterSelect(name)}}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;