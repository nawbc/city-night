import React from 'react';
// import { NativeHTML } from '../../utils/muguet.interface';

interface GlobalProps{
    init?: any;
}

/**
 * this component can make all child components get data on it;
 * @example
 * <Global data={{name: 'test'}}>
 *
 * </Global>
 */

const GlobalContext = React.createContext({});


class Global extends React.Component<GlobalProps | any, any>{
    static wander;

    constructor(props){
        super(props);
    }

    handleExtraProps = (): any => {
        return this.props;
    }

    render(){
        return (
            <GlobalContext.Provider value='global'>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

class GetGlobal extends React.Component<GlobalProps | any, any>{
    constructor(props){
        super(props);
    }

    handleExtraProps = (): any => {
        return this.props;
    }

    render(){
        return (
            <GlobalContext.Consumer>
                {(value)=>{
                    return this.props.children;
                }}
            </GlobalContext.Consumer>
        )
    }
}
export { GetGlobal, Global };
