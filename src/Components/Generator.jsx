import React from 'react'
import Box from './Box'



const Generator = () => {

    const [data, setData] = React.useState({
        id: 0,
        color: '',
        int: 50,
    })

    const [colorList, setColorList] = React.useState([])

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        setColorList([...colorList, data])
        setData({ id: data.id += 1, color: '', int: 50 })
        e.preventDefault()
    }

    const deleteBox = (e, id) => {
        setColorList(colorList.filter(box => box.id != id))
    }

    return (
        < div className='container mt-5'>
            <form onSubmit={handleSubmit} className="w-50">
                <div className='d-flex justify-content-around align-items-center'>
                    <label className='form-label'>Color: </label>
                    <input type="text" className="form-control m-3 " name="color" onChange={handleChange} value={data.color} />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <label className='form-label'>width/height: </label>
                    <input type="number" className="form-control m-3 " name="int" onChange={handleChange} value={data.int} />
                </div>
                <input type="submit" value="Submit" />
            </form>
            <div className='d-flex flex-wrap'>
                {colorList.map(box => <Box {...box} onClick={(e) => deleteBox(e, box.id)} />)}
            </div>
        </div >
    )
}

export default Generator;