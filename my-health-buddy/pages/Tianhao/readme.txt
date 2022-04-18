<SafeAreaView style={styles.navigationContainer}>

                  <Text style={styles.titleText}>Welcome To Good For Health</Text>

                  {/* <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}> */}
                  {/* button for logout */}
                      {/* <Text style={styles.text}>View MC</Text> */}
                      {/* <Ionicons name="ios-person-circle-outline" size={50} color="white"/>
                  </TouchableOpacity> */}
                  <LogoutButton/>
<TouchableOpacity style={styles.loginBtn} onPress={handleViewMc}>
                  {/* button to for View MC */}
                      {/* style={{width:'100%', height: '100%'}} */}
                      {/* <Card style={{width:'100%', height: '100%'}}> */}
                          <Image source={testMc} style={{width:300, height: 250}}></Image>
                        {/* <Image source={mcBanner} style={{width:'100%', height: '100%', justifyContent: 'center', alignSelf:'center'}}></Image> */}
                        {/* <Image source={mc} style={{width:'100%', height: '100%', justifyContent: 'center', alignSelf:'center'}}></Image> */}
                        
                        {/* <View style={styles.cardTextContainer}></View> */}
                        <Text style={styles.cardText}>View MC</Text>
                        
                      {/* </Card> */}
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.loginBtn} onPress={handleViewTestResults}>
                  {/* button to for View Test Results */}
                      <Image source={testMc} style={{width:300, height: 250}}></Image>
                      <Text style={styles.cardText}>View Test Results</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.loginBtn} onPress={handleViewHealthTips}>
                  {/* button to for View Health Tips */}
                      <Image source={testMc} style={{width:300, height: 250}}></Image>
                      <Text style={styles.cardText}>View Health Tips</Text>
                  </TouchableOpacity>
                  </SafeAreaView>