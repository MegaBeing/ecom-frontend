import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiscountIcon from '@mui/icons-material/Discount';
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export const Account = {
    label: 'My Account',
    icon: <AccountCircleIcon/>,
    href: '/my-account',
}
export const drawerData = [
    {
        label: 'My Orders',
        icon: <ChecklistIcon/>,
        href: '/my-orders',
    },
    {
        label: 'Trending',
        icon: <CheckroomIcon/>,
        href: '/trending'
    },
    {
        label: 'Shop By Category',
        icon: <CategoryIcon/>,
        trailingIcon: <KeyboardArrowRightIcon/>,
    },
    {
        label: 'Deals',
        icon: <DiscountIcon/>,
        href: '/deals'
    }
]