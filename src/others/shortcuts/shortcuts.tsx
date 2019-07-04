import React from 'react';
/**@see hotkeys-js {@link https://www.npmjs.com/package/hotkeys-js}*/
import Hotkeys, { HotkeysEvent } from 'hotkeys-js';


interface ShortCutsProps {
    groups?: {
        [index: string]: Function
    };
}
/**
 * @example
 * <ShortCuts
 *      groups={{
 *           func1: ()=>{},{ element }
 *           func2: ()=>{}
 *      }}
 * ></ShortCuts>
 */

class ShortCuts extends React.Component<ShortCutsProps, any>{
    constructor(props) {
        super(props);
        this.handleHotkeys();
    }

    //not fix the hotkey-js's bug that presses constantly using default event;
    handleHotkeys = () => {

        for (let p in this.props.groups) {
            Hotkeys(p, (event, handler) => {
                this.props.groups![p](event as Event, handler as HotkeysEvent)
            })
        }
    }

    render() {
        return this.props.children;
    }
}

export default ShortCuts;

