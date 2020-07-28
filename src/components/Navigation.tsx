import React from 'react';
import { NavLink } from 'react-router-dom';

export interface IRoute {
    path: string;
    name: string;
}

export interface INavigationProps {
    routes: IRoute[];
}

export const Navigation = (props: INavigationProps): JSX.Element => {
    const mapRoutes = (): JSX.Element[] => props.routes.map((route: IRoute) => {
        const { path, name } = route;
        
        return (
            <li key={ path } className="nav-item">
                <NavLink to={ path } className="nav-link">
                    { name }
                </NavLink>
            </li>
        );
    });

    return (
        <ul className="navbar-nav">
            { mapRoutes() }
        </ul>
    );
};