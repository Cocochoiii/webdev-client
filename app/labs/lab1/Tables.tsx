// Tables put data into rows and columns
export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">9/14/26</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">9/21/26</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">9/28/26</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">10/5/26</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">10/12/26</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Node.js</td>
            <td align="center">10/19/26</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">REST APIs</td>
            <td align="center">10/26/26</td>
            <td align="right">89</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">MongoDB</td>
            <td align="center">11/2/26</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Redux</td>
            <td align="center">11/9/26</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">11/16/26</td>
            <td align="right">93</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90.4</td>
          </tr>
        </tfoot>
      </table>

      <h5>My week during the Amazon Co-op</h5>
      <table border={1} width="100%" id="wd-your-table">
        <thead>
          <tr>
            <th align="center">Day</th>
            <th align="center">What I do</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">Monday</td>
            <td>Amazon Co-op, then CS5610 lecture at night</td>
            <td align="right">11</td>
          </tr>
          <tr>
            <td align="center">Wednesday</td>
            <td>Amazon Co-op, then I read the textbook chapter</td>
            <td align="right">10</td>
          </tr>
          <tr>
            <td align="center">Friday</td>
            <td>Amazon Co-op, then I start the assignment</td>
            <td align="right">10</td>
          </tr>
          <tr>
            <td align="center">Saturday</td>
            <td>Walk the boarding dogs, then finish the assignment</td>
            <td align="right">6</td>
          </tr>
          <tr>
            <td align="center">Sunday</td>
            <td>Hike with the dogs, test every page, deploy and submit</td>
            <td align="right">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
