import React from 'react'
import Select from 'react-select'
import getModes from 'Api/index.js'

import styles from './index.module.scss'

const SelectModule = ({ modes, onChange }) => {
    const { selectLabels } = getModes()
    const modesKeys = Object.keys(modes)

    const selectOptions = modesKeys.map((key) => ({
        value: modes[key].field,
        label: selectLabels[key],
    }))

    return (
        <Select
            className={styles.select}
            options={selectOptions}
            placeholder={selectLabels.default}
            onChange={onChange}
        ></Select>
    )
}

export default SelectModule
