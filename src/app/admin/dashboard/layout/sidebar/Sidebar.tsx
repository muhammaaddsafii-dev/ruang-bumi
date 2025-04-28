import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
// Temporarily comment out this import to test if it's the issue
// import { Sidebar, Logo } from 'react-mui-sidebar';
import { useTheme } from "@mui/material/styles"; // Tambahkan import ini
import { Theme } from "@mui/material/styles"; // Tambahkan ini juga

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const theme = useTheme<Theme>(); // Ambil theme
  const lgUp = useMediaQuery(theme.breakpoints.up("lg")); // Pakai langsung

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: "border-box",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              padding: "20px",
            }}
          >
            {/* Temporarily replace with simple components */}
            <Box component="div" sx={{ height: "50px", mb: 2 }}>
              Logo Placeholder
            </Box>
            <SidebarItems />
            <Upgrade />
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <Box px={2} sx={{ padding: "20px" }}>
        {/* Temporarily replace with simple components */}
        <Box component="div" sx={{ height: "50px", mb: 2 }}>
          Logo Placeholder
        </Box>
        <SidebarItems />
        <Upgrade />
      </Box>
    </Drawer>
  );
};

export default MSidebar;