import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import WcTextField from './wc-text-field';
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { Wrapper } from '@googlemaps/react-wrapper';
import { config } from '../config';

interface WcAddressInputProps {
    setAddress: (newValue: string) => void;
    address: string;
}

const styles = {
    container: {
        position: 'relative',
        zIndex: 999,
    },
    dropdownContainer: {
        maxHeight: '110px',
        overflow: 'scroll',
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.25)',
    },
    listItem: {
        '&:hover, &:focus': {
            backgroundColor: '#CDE7ED',
        },
    },
};

const WcAddressInput: React.FC<WcAddressInputProps> = ({ setAddress, address }) => {
    const handleChange = (newAddress: string) => {
        setAddress(newAddress);
    };

    const handleSelect = (selectedAddress: string) => {
        setAddress(selectedAddress);

        // You can perform additional actions when an address is selected,
        // such as geocoding or storing the coordinates.
        geocodeByAddress(selectedAddress)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                console.log('Coordinates:', latLng);
            })
            .catch((error) => {
                console.error('Geocoding Error', error);
            });
    };

    return (
        <Wrapper apiKey={config.googleMapsApiKey} libraries={["places"]}>
            <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <WcTextField
                            {...getInputProps({
                                className: 'location-search-input',
                                autoComplete: 'new-password',
                            })}
                            placeholder="Address"
                            fullWidth
                        />
                        <Box sx={styles.container}>
                            {(loading || suggestions.length > 0) && (
                                <List className="autocomplete-dropdown-container" sx={styles.dropdownContainer}>
                                    {loading && <ListItem>Loading...</ListItem>}
                                    {suggestions.map((suggestion, index) => {
                                        const className = suggestion.active ? 'suggestion-item active' : 'suggestion-item';
                                        return (
                                            <ListItemButton
                                                sx={styles.listItem}
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    tabIndex: 0, // Add tabindex to enable focus
                                                })}
                                                key={index}
                                            >
                                                {suggestion.description}
                                            </ListItemButton>
                                        );
                                    })}
                                </List>
                            )}
                        </Box>
                    </div>
                )}
            </PlacesAutocomplete>
        </Wrapper>
    );
};

export default WcAddressInput;
