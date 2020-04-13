import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../Axios-order';

//This is the price list of the ingridents 
const INGRIDIENT_PRICE = {
    salad : 10,
    meat : 30,
    cheese : 20,
    bacon :40
}

//The Builder componetnt 
class BurgerBuilder extends Component{
    //The state of the app
    state = {
        ingridient : null,
        totalPrice : 30,
        orderable : false,
        ordering : false,
        loading: false
    }

    //Intitializing the ingridients state
    componentDidMount() {
        axios.get('https://react-burger-builder-24755.firebaseio.com/ingridient.json')
            .then( res => {
                this.setState({ingridient : res.data});
            })
            .catch( err => {
                console.log(err);
            })
    }

    //Checking if the user added an ingrident or not for showing the order now button
    orderableHandeler = (ings) => {
        const sum = Object.keys(ings)
                        .map( igKey => {
                            return ings[igKey];
                        }).reduce((sum,el) => {
                            return sum+el;
                        },0);
        this.setState({orderable : sum > 0})
    }

    //The add of each ingredient 
    addHandeler = (type) => {
        let oldCount = this.state.ingridient[type];
        let updatedCount = oldCount + 1;
        let updatedIngridients = {...this.state.ingridient};
        updatedIngridients[type] = updatedCount;

        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + INGRIDIENT_PRICE[type];

        this.setState({
            totalPrice: newPrice, 
            ingridient : updatedIngridients
        }); 
        this.orderableHandeler(updatedIngridients);  
    }

    //The remove of each ingredient 
    removeHandeler = (type) => {
        let oldCount = this.state.ingridient[type];
        if(oldCount < 1){
            return
        }

        let updatedCount = oldCount - 1;
        let updatedIngridients = {...this.state.ingridient};
        updatedIngridients[type] = updatedCount;

        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - INGRIDIENT_PRICE[type];

        this.setState({
            totalPrice: newPrice, 
            ingridient : updatedIngridients
        });
        this.orderableHandeler(updatedIngridients);
    }

    //Ordering Handeler for showing the modal
    orderingHandeler = () => {
        this.setState({ordering : true});
    }

    //Ordering Close Handeler for closeing 
    orderingCloseHandeler = () => {
        this.setState({ordering : false});
    }

    //Ordering Continue Handeler for continue
    orderingContinueHandeler = () => {
        this.setState({loading : true});
        let order = {
            ingridents : this.state.ingridient,
            price : this.state.totalPrice,
            customer : {
                name: "tanvir mahin",
                phone : "01773688896",
                address : {
                    street: "Cs road 1",
                    division : "Rangpur",
                    house:"23"
                },
                email:"tanvirmahin24@gmail.com",
                deleveryMethod : "fastest"
            } 
        }
        axios.post('./orders.json',order)
            .then( res => {
                this.setState({loading : false , ordering: false});
            })
            .catch( err => {
                this.setState({loading : false , ordering: false});
            })
    }

    //Render 
    render(){
        const disabledInfo = {
            ...this.state.ingridient
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSum = null;
        if(this.state.ingridient){
            orderSum = <OrderSummary 
            ings={this.state.ingridient}
            orderCancel={this.orderingCloseHandeler}
            orderContinue={this.orderingContinueHandeler}
            totalPrice = {this.state.totalPrice}                    
        />
        }

        if(this.state.loading){
            orderSum = <Spinner />
        }
        
        let burger = <Spinner/>

        if(this.state.ingridient){
            burger = <Aux>
                <Burger ingridients= {this.state.ingridient}/>
                <BuildControls 
                    ingAdded = {this.addHandeler} 
                    ingRemove = {this.removeHandeler}
                    disabled = {disabledInfo}
                    purchasable= {this.state.orderable}
                    price={this.state.totalPrice}
                    ordering = {this.orderingHandeler}
                />
            </Aux>
        }

        //console.log(this.state.totalPrice)
        return (
            <Aux>
                <Modal show = {this.state.ordering} close={this.orderingCloseHandeler}>
                    {orderSum}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default BurgerBuilder;

//<Aux> is a special component for making all the other componet its children component