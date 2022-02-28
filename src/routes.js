import LoginItem from "./components/login/Login";
import Register from "./components/register/RegisterItem";
import StartPage from "./components/startPage/StartPage";
import Statistic from "./components/statistics/Statistic";
import LocationsPage from "./components/locations/LocationsPage";
import ClientsPage from "./components/clients/ClientsPage";
import EmployeesPage from "./components/employees/EmployeesPage";
import Settings from "./components/settings/SettingsItem";

export default [
    {name: 'login', path: '/login', component: LoginItem},
    {name: 'register', path: '/register', component: Register},
    {name: 'startPage', path: '/startPage', component: StartPage},
    {name: 'statistic', path: '/statistic', component: Statistic},
    {name: 'locations', path: '/locations', component: LocationsPage, props: true},
    {name: 'clients', path: '/clients', component: ClientsPage},
    {name: 'employees', path: '/employees', component: EmployeesPage, props: true},
    {name: 'settings', path: '/settings', component: Settings},
]
