import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { LineAxisOutlined } from "@mui/icons-material";

// Define the Item component
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color:
          selected === title ? "#fff" : isHovered ? "#333" : colors.grey[100],
        backgroundColor:
          selected === title
            ? "#3699e5"
            : isHovered
            ? "#3699e5"
            : "transparent", // Set màu item khi hover ở sidebar
        borderRadius: "5px",
        transition: "background-color 0.3s ease", // Smooth transition
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarTab = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard"); // Default selected item

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        transitionDuration={1000}
        style={{ border: "none" }}
        width="300px"
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              backgroundColor: "transparent", // Maintain default background
              borderRadius: "5px",
              transition: "background-color 0.3s ease", // Smooth transition
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box display="flex" alignItems="center">
                  <img
                    alt="logo"
                    src="../../logo512.png" // Replace with your logo path
                    style={{
                      width: "40px", // Adjust size as needed
                      height: "auto",
                    }}
                  />
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    sx={{ p: "5px" }}
                  >
                    AVENT
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box
              mb="25px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="../../assets/user.jpg"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Minh Thong
                </Typography>
                <Typography color={colors.greenAccent[400]}>
                  Tài khoản Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS USERS */}
          <Box padding={isCollapsed ? undefined : "10%"}>
            <Item
              title="Bảng Điều Khiển"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Phiếu Bán Hàng
              </Typography>
            )}

            <Item
              title="Hóa đơn bán hàng"
              to="/ticket-pos"
              icon={<ComputerOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Phiếu Nhập"
              to="/booking-onl"
              icon={<BookOnlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Phiếu Xuất"
              to="/booking-onl"
              icon={<BookOnlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Quản Lý
              </Typography>
            )}

            <Item
              title="Nhân Viên"
              to="/sale-report"
              icon={<PersonOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Khách Hàng"
              to="/customer"
              icon={<PersonOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Sản Phẩm"
              to="/invoice"
              icon={<ArticleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Mẫu Sản Phẩm"
              to="/payroll"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Quản Lý Cửa Hàng"
              to="/statictis"
              icon={<StoreOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarTab;
