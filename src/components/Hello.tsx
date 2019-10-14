import React, { PureComponent, SFC } from 'react';
import { HelloProps } from './types';
// export interface HelloProps {
//   name: string;
//   age:number;
// }

export const Hello2: SFC<HelloProps> = ({ name }) => (
    <h1>{name}</h1>
);

export class Hello extends PureComponent<HelloProps>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {name} = this.props;
        return (
            <h1>{name}</h1>
        )
    }
}