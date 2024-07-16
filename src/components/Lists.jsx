import List from './List.jsx';


const Lists = () => {

    const lists = [{

        header: "Title of article",
        author: "Name of writer",
        description: "What is the story about?"
    },
    {

        header: "Title of article",
        author: "Name of writer",
        description: "What is the story about?"
    },
    {

        header: "Title of article",
        author: "Name of writer",
        description: "What is the story about?"
    },
    {

        header: "Title of article",
        author: "Name of writer",
        description: "What is the story about?"
    }]


    return (
        <div className="list-container">

            {lists.map(list => {
                return <List list={list} />

            }
            )
            }
        </div>
    )
}
export default Lists;