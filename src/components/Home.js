import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <div id="container1">
            <div class="main">
                <h1>OSINT Search</h1>

                <form>
                    <input type="text" placeholder="Search"></input>
                    <button type="submit">Search</button><br></br><br></br>

                    <div class="radio-option">
            <input type="radio" id="option1" name="selection" value="option1" required></input>
            <label for="option1">
                <p class="search">Basic Search</p>
                <p class="faint">Quick, Short Search</p>
            </label>
        </div>

        <div class="radio-option">
            <input type="radio" id="option2" name="selection" value="option2"></input>
            <label for="option2">
                <p class="search">Meduim Search</p>
                <p class="faint">Takes longer than a basic search, but shorter than a full search</p>
            </label>
        </div>

        <div class="radio-option">
            <input type="radio" id="option3" name="selection" value="option3"></input>
            <label for="option3">
                <p class="search">Full search</p>
                <p class="faint">Can take a while, but will provide a comprehensive report of the object being searched.</p>
            </label>
        </div>
                </form>
            </div>
        <div className="main2">
            <h1>Result</h1>
            <div class="result">
                <table>
                    <tr>
                        <th>
                            Serial Number
                        </th>
                        <th>
                            Item
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    );
}   

export default Home;