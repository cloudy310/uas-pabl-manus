import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function index() {
    return (
        <ScrollView style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <View style={styles.brand}>
                    <Image source={require('@/assets/banners/manus-logo.png')} style={styles.logo}/>
                    <Text style={styles.brandText}>manus</Text>
                </View>
                
                <TouchableOpacity style={styles.hamburgerButton}>
                    <View style={styles.hamburgerLine}/>
                    <View style={styles.hamburgerLine}/>
                    <View style={styles.hamburgerLine}/>
                </TouchableOpacity>
            </View>

            {/* Thumbnail Video */}
            <View style={styles.section}>
                <Text style={styles.title}>Leave it to Manus</Text>
                <Text style={styles.subtitle}>Manus is a general AI agent that bridges minds and actions: it doens't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.</Text>
                <View style={styles.videoContainer}>
                    <Image source={require('@/assets/banners/home.webp')} style={styles.thumbnailVideo}/>
                    <View style={styles.playButtonOverlay}>
                        <View style={styles.playButton}>
                            <View  style={styles.playIcon}/>
                        </View>
                    </View>
                </View>
                <View style={styles.heroButtonContainer}>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Try Manus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Instagram</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Cards of News */}
            <View style={styles.section}>
                <Text style={styles.title}>Explore use cases from our official collection</Text>
                <Text style={styles.subtitle}>
                    Learn how Manus handles real-world through step by step replays
                </Text>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
                        <Text style={[styles.categoryText, styles.activeCategoryText]}>Featured</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton]}>
                        <Text style={[styles.categoryText]}>Research</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton]}>
                        <Text style={[styles.categoryText]}>Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton]}>
                        <Text style={[styles.categoryText]}>Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton]}>
                        <Text style={[styles.categoryText]}>Marketing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton]}>
                        <Text style={[styles.categoryText]}>Sales</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Image source={require('@/assets/icons/book.png')} style={styles.cardIcon}/>
                        <Text style={styles.cardTitle}>Explore use cases from our official collection</Text>
                        <Text style={styles.cardDescription}>Manus integrates comprehensive travel information to create personalized itineraries and produces a custom travel handbook tailored specifically for your Japanese adventure.</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('@/assets/icons/settings.png')} style={styles.cardIcon}/>
                        <Text style={styles.cardTitle}>Interactive course on the momentum theorem</Text>
                        <Text style={styles.cardDescription}>
                            Manus develops engagin video presentations for middle school educators, clearly explaining the momentum theorem through accessible and educational content.
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('@/assets/icons/chart-area-line.png')} style={styles.cardIcon}/>
                        <Text style={styles.cardTitle}>Comparative analysis of insurance policies</Text>
                        <Text style={styles.cardDescription}>Looking to compare insurance options? Manus generates clear, structured comparison tables highlighting key policy information with optimal recommendations tailored to your needs</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('@/assets/icons/book.png')} style={styles.cardIcon}/>
                        <Text style={styles.cardTitle}>B2B supplier sourcing </Text>
                        <Text style={styles.cardDescription}>Manus conducts comprehensive research across extensive networks to indetify the most suitable uppliers for your specific requirements. As your dedicated agent, Manus works exclusively in your best interest.</Text>
                    </View>
                </View>
            </View>

            {/* Events */}
            <View style={styles.section}>
                <Text style={styles.title}>Events</Text>
                <Text style={styles.subtitle}>Join our community events to learn more about Manus AI and connect with other enthusiasts.</Text>

                <View style={styles.eventsContainer}>
                    <View>
                        <Image source={require('@/assets/banners/blog-image-1.avif')}  style={styles.blogImage}/>
                        <Text style={styles.blogSubtitle}>Vibe Coding For Startups With Manus</Text>
                        <Text style={styles.blogDate}>May 3 2025</Text>
                    </View>
                    <View>
                        <Image source={require('@/assets/banners/blog-image-2.avif')}  style={styles.blogImage}/>
                        <Text style={styles.blogSubtitle}>Manus Meetup Melbourne</Text>
                        <Text style={styles.blogDate}>Apr 28 2025</Text>
                    </View>
                    <View>
                        <Image source={require('@/assets/banners/blog-image-3.avif')}  style={styles.blogImage}/>
                        <Text style={styles.blogSubtitle}>Manus Meetup Sydney</Text>
                        <Text style={styles.blogDate}>Apr 29 2025</Text>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footerSection}>
                <Text style={[styles.footerText, styles.footerTextHeader]}>Company</Text>
                <Text style={[styles.footerText]}>About Us</Text>
                <Text style={[styles.footerText]}>Media Inquiries</Text>
                <Text style={[styles.footerText]}>Contact Us</Text>
                <Text style={[styles.footerText]}>Careers</Text>
                <Text style={[styles.footerText, styles.footerTextHeader]}>Resources</Text>
                <Text style={[styles.footerText]}>About Us</Text>
                <Text style={[styles.footerText]}>Media Inquiries</Text>
                <Text style={[styles.footerText]}>Contact Us</Text>
                <Text style={[styles.footerText]}>Careers</Text>
                <Text style={[styles.footerText, styles.footerTextHeader]}>Community</Text>
                <Text style={[styles.footerText]}>About Us</Text>
                <Text style={[styles.footerText]}>Media Inquiries</Text>
                <Text style={[styles.footerText]}>Contact Us</Text>
                <Text style={[styles.footerText]}>Careers</Text>

                <View style={styles.footerBrand}>
                    <Image style={styles.logoBrand} source={require('@/assets/banners/manus-logo.png')}/>
                    <Text style={styles.textBrand}>manus</Text>
                </View>
                <View style={styles.copyContainer}>
                    <Text style={styles.copyText}>&copy; 2025 Manus AI</Text>
                    <Text style={styles.copyText}>Headquartered in Singapore</Text>
                </View>

                <View style={styles.socialMediaFooter}>
                    <Image source={require('@/assets/icons/brand-linkedin.png')} style={styles.socialMediaIcon}/>
                    <Image source={require('@/assets/icons/brand-instagram.png')} style={styles.socialMediaIcon}/>
                    <Image source={require('@/assets/icons/brand-x.png')} style={styles.socialMediaIcon}/>
                    <Image source={require('@/assets/icons/brand-tiktok.png')} style={styles.socialMediaIcon}/>
                    <Image source={require('@/assets/icons/brand-youtube.png')} style={styles.socialMediaIcon}/>
                </View>
            </View>
        </ScrollView>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    navbar: {
        width: '100%',
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 35,
        height: 35,
    },
    brand: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    brandText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    hamburgerButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    hamburgerLine: {
        width: 18,
        height: 2,
        backgroundColor: "#333",
        borderRadius: 2,
    },
    section: {
        paddingVertical: 40,
        alignItems: 'center',
        paddingHorizontal: 36,
    },
    title: {
        fontSize: 34,
        paddingTop: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12, 
        color: "#666",
        marginVertical: 15,
        lineHeight: 15,
        textAlign: 'center'
    },
    videoContainer: {
        position: 'relative',
    },
    thumbnailVideo: {
        width: 280, 
        height: 158,
        borderRadius: 3,
        marginVertical: 10,
    },
    playButtonOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderColor: 'rgba(255,255,255,0.9)',
        borderWidth: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playIcon: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 0,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderLeftColor: '#fff',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        marginLeft: 4,
    },
    heroButtonContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 20,
    },
    primaryButton: {
        paddingHorizontal: 23,
        paddingVertical: 3,
        backgroundColor: '#000000ff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    primaryButtonText:{
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    secondaryButton: {
        paddingHorizontal: 23,
        paddingVertical: 3,
        backgroundColor: '#f6f6f6ff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondaryButtonText: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
    },
    categoryContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 20,
    },
    categoryButton: {
        paddingVertical: 4,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    activeCategory: {
        backgroundColor: '#000',
        borderColor: '#000',
    },
    categoryText: {
        fontSize: 12,
        color: '#333',
    },
    activeCategoryText: {
        color: '#fff',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        paddingHorizontal: 20,
        marginHorizontal: -46,
        justifyContent: 'space-between'
    },
    card: {
        width: width /2 -30,
        padding: 15,
        borderRadius: 15,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#d8d8d8ff',
    },
    cardIcon: {
        width: 25,
        height: 25,
        marginBottom: 10,
        resizeMode: 'contain',
        tintColor: '#fff',
        backgroundColor: '#000',
        padding: 3,
        borderRadius: 100,
        boxShadow: '0 4px 5px rgba(0,0,0,0.4)',
    },
    cardTitle: {
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 10,
        color: '#555',
    },
    eventsContainer: {
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: -46,
    },
    blogImage: {
        borderRadius: 10,
        marginBottom: 10,
        width: 280,
        height: 180,
    },
    blogSubtitle: {
        fontSize: 14,
        marginLeft: 10,
        color: '#000',
        fontWeight: 'semibold',
        textAlign: 'left'
    },
    blogDate: {
        marginLeft: 10,
        fontSize: 11,
        color: '#888'
    },
    footerSection: {
        alignItems: 'flex-start',
        gap: 5,
        paddingHorizontal: 18,
        paddingTop: 10,
        paddingBottom: 40
    },
    footerText: {
        fontSize: 12,
        color: '#888'
    },
    footerTextHeader: {
        fontSize: 12,
        marginTop: 20,
        fontWeight: '400',
        color: '#333',
    },
    footerBrand:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 20
    },
    logoBrand: {
        width: 25,
        height: 25
    },
    textBrand: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    copyText:{
        fontSize: 10,
        lineHeight: 10,
        color: '#888'
    },
    copyContainer: {
        marginTop: 5
    },
    socialMediaFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 15,
    },
    socialMediaIcon:{ 
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
})