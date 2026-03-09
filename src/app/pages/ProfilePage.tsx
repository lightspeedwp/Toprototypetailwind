/**
 * Profile Page - User Profile Management
 * 
 * A comprehensive profile management page with account details,
 * preferences, and quick access to key features.
 * 
 * **WordPress Mapping:**
 * - Template: page-profile.php
 * - Template hierarchy: page-profile.php → page.php → singular.php → index.php
 * 
 * **Required Patterns (in order):**
 * 1. Hero - Profile header with avatar
 * 2. Quick Stats - Bookings, points, membership
 * 3. Profile Sections - Personal info, preferences
 * 4. Quick Actions - Common tasks
 * 
 * **Features:**
 * - Profile information display
 * - Avatar upload
 * - Quick statistics
 * - Recent bookings
 * - Saved passengers
 * - Account settings access
 * - Logout functionality
 * 
 * @module ProfilePage
 * @category pages
 * @wordpressTemplate page-profile.php
 */

import "../../styles/pages/profile.css";
import { useState } from "react";
import { Container } from "../components/common/Container";
import {
  User,
  EnvelopeSimple as Mail,
  Phone,
  MapPin,
  Calendar,
  Gear as Settings,
  SignOut as LogOut,
  PencilSimple as Edit,
  Heart,
  Users,
  CreditCard,
  Shield,
  Bell,
  CaretRight as ChevronRight,
  Medal as Award,
  AirplaneTilt as Plane,
  Star,
} from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { toast } from "sonner";
import { useNavigation } from "../contexts/NavigationContext";

/**
 * Profile page props.
 */
interface ProfilePageProps {
  onNavigate?: (pageId: string) => void;
}

/**
 * Mock user data.
 */
const MOCK_USER = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  memberSince: "2023-01-15",
  avatar: null,
  stats: {
    totalBookings: 12,
    upcomingTrips: 2,
    rewardPoints: 2450,
    savedTours: 8,
  },
  membership: {
    tier: "Gold",
    level: 2,
    nextTier: "Platinum",
    pointsToNext: 550,
  },
};

/**
 * Profile Page Component.
 */
export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { navigateTo } = useNavigation();
  const nav = (path: string) => {
    if (onNavigate) onNavigate(path);
    else navigateTo(path);
  };

  const [user] = useState(MOCK_USER);

  /**
   * Handle logout.
   */
  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      toast.success("Logged out successfully");
      nav("/login");
    }
  };

  /**
   * Handle edit profile.
   */
  const handleEditProfile = () => {
    toast.info("Edit profile - Feature coming soon");
  };

  /**
   * Handle avatar upload.
   */
  const handleAvatarUpload = () => {
    toast.info("Avatar upload - Feature coming soon");
  };

  const memberSince = new Date(user.memberSince);

  return (
    <>
      {/* ================================================================
          HERO - Profile header
          ================================================================ */}
      <section className="py-section-sm md:py-section-md bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 border-4 border-border flex items-center justify-center overflow-hidden">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                  )}
                </div>
                <button
                  onClick={handleAvatarUpload}
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Upload avatar"
                >
                  <Edit className="w-5 h-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="mb-2">
                      {user.firstName} {user.lastName}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-4 h-4" />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {user.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleEditProfile}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-md",
                      "bg-primary text-primary-foreground",
                      "hover:bg-primary/90 transition-colors",
                      "focus:outline-none focus:ring-2 focus:ring-ring"
                    )}
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>

                {/* Membership Badge */}
                <div className="wp-badge-accent-bordered">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{user.membership.tier} Member</span>
                  <span className="text-xs text-muted-foreground">
                    Level {user.membership.level}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Member since {memberSince.toLocaleDateString("en-US", { 
                    month: "long", 
                    year: "numeric" 
                  })}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================================
          QUICK STATS - Dashboard statistics
          ================================================================ */}
      <section className="py-8 bg-background border-y border-border">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="wp-pattern-profile__stats-grid">
              <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Plane className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium">{user.stats.totalBookings}</p>
                    <p className="text-xs text-muted-foreground">Total Trips</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium">{user.stats.upcomingTrips}</p>
                    <p className="text-xs text-muted-foreground">Upcoming</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium">{user.stats.rewardPoints.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium">{user.stats.savedTours}</p>
                    <p className="text-xs text-muted-foreground">Saved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Progress */}
            <div className="mt-6 bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-medium">
                    {user.membership.pointsToNext} points to {user.membership.nextTier}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Current: {user.stats.rewardPoints.toLocaleString()} points
                  </p>
                </div>
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{
                    width: `${(user.stats.rewardPoints / (user.stats.rewardPoints + user.membership.pointsToNext)) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================================
          MAIN CONTENT - Profile sections & quick actions
          ================================================================ */}
      <section className="py-section-sm md:py-section-md bg-background">
        <Container>
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-3">
            {/* Left Column - Quick Actions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Account Menu */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3>Account</h3>
                </div>
                <nav className="divide-y divide-border">
                  {[
                    {
                      icon: User,
                      label: "Personal Information",
                      onClick: () => handleEditProfile(),
                    },
                    {
                      icon: Calendar,
                      label: "My Bookings",
                      onClick: () => nav("/booking/management"),
                    },
                    {
                      icon: Users,
                      label: "Saved Passengers",
                      onClick: () => nav("/profile/passengers"),
                    },
                    {
                      icon: Heart,
                      label: "Wishlist",
                      onClick: () => toast.info("Wishlist - Coming soon"),
                    },
                    {
                      icon: CreditCard,
                      label: "Payment Methods",
                      onClick: () => toast.info("Payment methods - Coming soon"),
                    },
                    {
                      icon: Bell,
                      label: "Notifications",
                      onClick: () => toast.info("Notifications - Coming soon"),
                    },
                    {
                      icon: Settings,
                      label: "Account Settings",
                      onClick: () => nav("/profile/settings"),
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={index}
                        onClick={item.onClick}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md",
                  "border-2 border-destructive text-destructive",
                  "hover:bg-destructive/10 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-ring"
                )}
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Right Column - Recent Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Bookings */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h3>Recent Bookings</h3>
                  <button
                    onClick={() => nav("/booking/management")}
                    className="text-sm text-primary hover:underline"
                  >
                    View all
                  </button>
                </div>
                <div className="divide-y divide-border">
                  {[
                    {
                      id: "BK-2024-001234",
                      tour: "Iceland Explorer",
                      date: "Aug 15, 2024",
                      status: "Confirmed",
                    },
                    {
                      id: "BK-2024-000987",
                      tour: "Kenya Safari Adventure",
                      date: "Jun 10, 2024",
                      status: "Confirmed",
                    },
                  ].map((booking) => (
                    <div key={booking.id} className="p-4 hover:bg-accent transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">{booking.tour}</p>
                        <span className="wp-badge-primary text-xs">
                          {booking.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {booking.date}
                        </span>
                        <span className="font-mono text-xs">{booking.id}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Info */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Account Security</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep your account secure with two-factor authentication and regular
                      password updates
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Two-Factor Auth</span>
                        <span className="text-destructive">Not enabled</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Last password change</span>
                        <span>3 months ago</span>
                      </div>
                    </div>
                    <button
                      onClick={() => nav("/profile/settings")}
                      className="mt-4 text-sm text-primary hover:underline"
                    >
                      Review security settings →
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats Details */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="mb-4">Travel Statistics</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Countries Visited</p>
                    <p className="text-2xl font-medium">15</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Distance</p>
                    <p className="text-2xl font-medium">125,000 km</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Favorite Destination</p>
                    <p className="text-lg font-medium">Iceland</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Next Adventure</p>
                    <p className="text-lg font-medium">45 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}