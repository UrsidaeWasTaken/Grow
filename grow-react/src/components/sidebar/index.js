import {
    SidebarContainer,
    SidebarWrapper,
    SidebarLink,
    Icon,
    CloseIcon
} from "./sidebar.style"


function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarLink to="/">Home</SidebarLink>
                <SidebarLink to="/plants">Plants</SidebarLink>
                <SidebarLink to="/about">About</SidebarLink>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar