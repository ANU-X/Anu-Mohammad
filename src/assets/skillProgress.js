import react_icons from '../assets/svg-react.svg'
import node_icons from '../assets/node-icon.svg'
import mongos_icons from '../assets/mongos.svg'
import tailwind_icons from '../assets/tailwind-icons.svg'
import css_icons from '../assets/css-icon.svg'
import javascript_icon from '../assets/javascript-icon.svg'


const SkillProgress = [
    {id:1, catagory: 'Language', name: 'JavaScript', percentage: 85, backgroundColor: '#f0db4f', image: javascript_icon},
    {id:2, catagory: 'Language', name: 'React', percentage: 80,backgroundColor: '#33c3f0', image: react_icons},
    {id:3, catagory: 'Language', name: 'Css', percentage: 97,backgroundColor: '#0366d6', image: css_icons},
    {id:4, catagory: 'Language', name: 'Tailwind', percentage: 90,backgroundColor: '#10b981', image: tailwind_icons},
    {id:5, catagory: 'Language', name: 'Node', percentage: 50,backgroundColor: '#3c873a', image: node_icons},
    {id:6, catagory: 'Language', name: 'Express', percentage: 40,backgroundColor: '#68a063'},
    {id:7, catagory: 'Language', name: 'MongoDB', percentage: 30, backgroundColor: '#049024', image: mongos_icons},
    {id:8, catagory: 'Tools', name: 'Photoshop', percentage: 90, backgroundColor: '#9517AE'}
]

export default SkillProgress;
