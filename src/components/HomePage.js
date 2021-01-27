import React,{Component} from 'react';
import NavigationBar from '../components/Nav/NavigationBar';
import Banner from '../components/Banner/Banner';
import BasicTable from './ReactTable/BasicTable'

export class HomePage extends Component{
    render()
    {
        return(
            <div>
            <NavigationBar/>
            <Banner/> 
           

            </div>
        )
    }
}

export default HomePage ;