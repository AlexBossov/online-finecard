import LoginItem from "./components/login/Login";
import Register from "./components/register/RegisterItem";
import StartPage from "./components/startPage/StartPage";
import Statistic from "./components/statistics/Statistic";
import LocationsPage from "./components/locations/LocationsPage";
import ClientsPage from "./components/clients/ClientsPage";
import EmployeesPage from "./components/employees/EmployeesPage";
import Settings from "./components/settings/SettingsItem";

export default [
    {name: 'login', path: '/online-finecard/login', component: LoginItem},
    {name: 'register', path: '/online-finecard/register', component: Register},
    {name: 'startPage', path: '/online-finecard/startPage', component: StartPage},
    {name: 'statistic', path: '/online-finecard/statistic', component: Statistic},
    {name: 'locations', path: '/online-finecard/locations', component: LocationsPage, props: true},
    {name: 'clients', path: '/online-finecard/clients', component: ClientsPage},
    {name: 'employees', path: '/online-finecard/employees', component: EmployeesPage, props: true},
    {name: 'settings', path: '/online-finecard/settings', component: Settings},
]
