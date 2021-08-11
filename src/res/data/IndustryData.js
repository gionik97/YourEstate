import { FaChartArea } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa'
import agent from '../img/agent.jpg'
import builder from '../img/builder.jpg'
import landlord from '../img/landlord.jpg'


export var industryData = [
    {
        id: 1,
        title: "I'm an agent",
        image: agent
    },
    {
        id: 2,
        title: "I'm a builder",
        image: builder
    },
    {
        id: 3,
        title: "I'm a landlord",
        image: landlord
    }
]

export var audienceData = [
    {
        id: 1,
        title: "Traffic 1",
        image: <FaChartArea />,
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 2,
        title: "Traffic 2",
        image: <FaHome />,
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 3,
        title: "Traffic 3",
        image: <FaDollarSign />,
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
]



