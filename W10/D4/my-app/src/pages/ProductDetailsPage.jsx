export function ProductDetailsPage() {
    const {id} = useParams();
    return (
        <div>
            <h3>Product ID: {id}</h3>
        </div>
    );
}