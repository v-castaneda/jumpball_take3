const React = require('react')
const Default = require('./layouts/Default')

function newPlayer({ players, event }) {
    state = {
        value: null,
        days: [{ day1: 'Monday', day2: 'Tuesday', day3: 'Wednesday', day4: 'Thursday', day5: 'Friday', day6: 'Saturday', day7: 'Sunday' }]
    }
    // handleChange(event) {
    //     this.setState({
    //         value: Array.from(event.target.selectedOptions, item => item.value)
    //     });
    // }
    return (
        <Default>
            <h2>Add new player</h2>
            <form action='/players' method='POST'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                />
                <label htmlFor='bio'>Bio</label>
                <input
                    type='text'
                    name='bio'
                />
                <label htmlFor='position'>
                    Position
                    <select>
                        <option value='Point Guard'>Point Guard</option>
                        <option value='Shooting Guard'>Shooting Guard</option>
                        <option value='Small Forward'>Small Forward</option>
                        <option value='Power Forward'>Power Forward</option>
                        <option value='Center'>Center</option>
                    </select>
                </label>
                <label htmlFor='days'>
                    Days Available
                    <select
                        multiple
                        onChange={(e) => console.log()}
                        value={this.state.value}
                    >
                        {this.state.days.map(days => (
                            <option value={days.pk}>{days.day1}</option>
                        ))}

                    </select>
                </label>

            </form>
        </Default>
    )
}

module.exports = newPlayer