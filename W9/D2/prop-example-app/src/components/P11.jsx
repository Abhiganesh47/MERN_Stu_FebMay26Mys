import  PropTypes from "prop-types"
// Prop validation
function Profile({ name, age }) {
    return (
        <div className="card">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export function PropTypesDemo(){
    return(
        <>
        <h2>Prop type demo</h2>
            <Profile name="Abhi" age={21}/>
        </>
    );
}