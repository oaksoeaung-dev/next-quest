export default function TripList({children}: {children?: React.ReactNode}) {
    return (
        <div className={"mt-10"}>
            <h1 className={"text-3xl font-semibold text-center my-5"}>Trip List</h1>
            <div className={"grid grid-cols-4 gap-10"}>
                {children}
            </div>
        </div>
    )
}